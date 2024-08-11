import { Router } from 'express';
import propertyRoutes from './property.route';
import taskRoutes from './task.route';
import userRoutes from './user.route';

const apiRouter = Router();

apiRouter.use('/properties', propertyRoutes);
apiRouter.use('/tasks', taskRoutes);
apiRouter.use('/users', userRoutes);

// Export the main router
export default apiRouter;
