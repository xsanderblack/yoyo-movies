import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

// Creates axios-cache-adapter instance and pass it to axios instance.
// Exports axiosWithCache function, that can be used to make requests with enabled caching.

const cache = setupCache({
  maxAge: 30 * 60 * 1000
});

const axiosWithCache = axios.create({
  adapter: cache.adapter
});

export default axiosWithCache;
