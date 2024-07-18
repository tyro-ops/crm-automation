import { test, expect } from '@playwright/test';
import ApiClient from './apiClient';
import { readTestData } from '../ui/utils/dataUtils';

const apiUrl = 'https://reqres.in/api';

interface User {
  id: number;
  name: string;
}

interface TestData {
  users: User[];
  newUser: User;
}

const testData: TestData = readTestData('apiTestData.json');
console.log(testData); // Debugging line

test.describe('API Tests', () => {
  let apiClient: ApiClient;

  test.beforeAll(() => {
    apiClient = new ApiClient(apiUrl);
  });

  test.describe('User API Tests', () => {
    testData.users.forEach((user) => {
      test(`should fetch data for user with ID ${user.id}`, async () => {
        const response = await apiClient.get(`/users/${user.id}`);
        expect(response.status).toBe(200);
        expect(response.data.data).toHaveProperty('id', user.id); // Adjusted to match the actual response structure
        expect(response.headers['content-type']).toContain('application/json');
      });

      test(`should update user with ID ${user.id}`, async () => {
        const updatedData = { name: `${user.name} Updated` };
        const response = await apiClient.put(`/users/${user.id}`, updatedData);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('name', updatedData.name); // Adjusted to match the actual response structure
      });
    });

    test('should create a new user', async () => {
      const newUser = testData.newUser;
      const response = await apiClient.post('/users', newUser);
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('name', newUser.name);
      newUser.id = response.data.id;  // Save the new user ID for subsequent tests
    });

    test('should delete the newly created user', async () => {
      const response = await apiClient.delete(`/users/${testData.newUser.id}`);
      expect(response.status).toBe(204);
    });
  });
});
