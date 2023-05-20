import { setupWorker } from 'msw';

import mockAPIs from './api';

export const mockServiceWorker = setupWorker(...mockAPIs);
