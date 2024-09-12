import { Router } from 'express';

import { verifyToken } from '../middleware';
import propertyRoutes from './property.route';
import taskRoutes from './task.route';
import userRoutes from './user.route';

const apiRouter = Router();

// Other API routes
apiRouter.use('/properties', verifyToken, propertyRoutes);
apiRouter.use('/tasks', verifyToken,  taskRoutes);
apiRouter.use('/users', verifyToken, userRoutes);

// Export the main router
export default apiRouter;