// src/tools.ts

/**
 * @file This file contains a mock implementation for the unsplash_tool.
 * The original file was missing, causing the application to crash.
 * This mock function returns placeholder images, allowing the UI to render without errors.
 * You can replace this with your actual Unsplash API implementation.
 */

// The unsplash_tool is designed to mimic a search tool for fetching images.
const unsplash_tool = {
  search: {
    /**
     * Mock function to get images based on a query.
     * @param {{ query: string }} params - The search parameters.
     * @returns {Promise<object>} A promise that resolves to a mock Unsplash API response.
     */
    get: async ({ query }: { query: string }): Promise<{ results: { id: string; urls: { regular: string }; alt_description: string; user: { name: string }; likes: number }[] }> => {
      console.log(`[Mock Unsplash] Searching for: "${query}"`);

      // This simulates a network delay.
      await new Promise(resolve => setTimeout(resolve, 500));

      // We'll return a consistent set of 10 placeholder images.
      const mockResults = Array.from({ length: 10 }).map((_, i) => ({
        id: `mock_id_${query}_${i}`,
        urls: {
          regular: `https://placehold.co/600x400/f0f0f0/333?text=${encodeURIComponent(query)}+${i + 1}`,
        },
        alt_description: `A placeholder image for the query: ${query} - item ${i + 1}`,
        user: {
          name: 'Placeholder Provider',
        },
        likes: Math.floor(Math.random() * 150),
      }));

      return Promise.resolve({
        results: mockResults,
      });
    },
  },
};

// Export the tool so it can be imported by other components.
export { unsplash_tool };
