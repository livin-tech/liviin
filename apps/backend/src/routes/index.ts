import { Router } from 'express';

// import { verifyToken } from '../middleware';
import propertyRoutes from './property.route';
import reminderRoutes from './reminder.route';
import taskRoutes from './task.route';
import userRoutes from './user.route';

const apiRouter = Router();

// apiRouter.use('/properties', verifyToken, propertyRoutes);
// apiRouter.use('/tasks', verifyToken, taskRoutes);
// apiRouter.use('/users', verifyToken, userRoutes);
// apiRouter.use('/reminders', verifyToken, reminderRoutes);

apiRouter.use('/properties', propertyRoutes);
apiRouter.use('/tasks', taskRoutes);
apiRouter.use('/users', userRoutes);
apiRouter.use('/reminders', reminderRoutes);

// Export the main router
export default apiRouter;
