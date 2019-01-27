import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 30 * 60 * 1000
});

// Create `axios` instance passing the newly created `cache.adapter`
const axiosWithCache = axios.create({
  adapter: cache.adapter
});

export default axiosWithCache;
