import { WS_TYPES } from 'api/@constants';
import type {
  TaskCreatedEvent,
  TaskDeletedEvent,
  TaskDto,
  TaskUpdatedEvent,
} from 'api/@types/task';
import type { UserDto } from 'api/@types/user';
import { websocket } from 'service/websocket';

export const taskEvent = {
  created: (user: UserDto, task: TaskDto): void => {
    const data: TaskCreatedEvent = { type: WS_TYPES[0], task };
    websocket.send(user.id, data);
  },
  updated: (user: UserDto, task: TaskDto): void => {
    const data: TaskUpdatedEvent = { type: WS_TYPES[1], task };
    websocket.send(user.id, data);
  },
  deleted: (user: UserDto, task: TaskDto): void => {
    const data: TaskDeletedEvent = { type: WS_TYPES[2], taskId: task.id };
    websocket.send(user.id, data);
  },
};
