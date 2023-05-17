import Queue from "bull";
import { registrationEmailJob } from "../jobs/registration-email";
import { env } from "../env";

const jobs = {
  registrationEmailJob,
};

export const queues = Object.values(jobs).map((job) => {
  return {
    bull: new Queue(job.key, {
      redis: { host: env.REDIS_HOST, port: env.REDIS_PORT },
    }),
    name: job.key,
    handle: job.handle,
  };
});

function add(name: string, data: any) {
  const queue = queues.find((queue) => queue.name === name);

  if (!queue) throw new Error();

  return queue.bull.add(data);
}

function process() {
  queues.forEach((queue) => {
    queue.bull.on("failed", (job, err) => {
      console.log(`Job falided: ${job}`);
      console.log(`Job falided: ${err}`);
    });

    queue.bull.process(queue.handle);
  });
}

export default {
  queues,
  add,
  process,
};
