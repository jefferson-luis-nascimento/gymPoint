import Bee from 'bee-queue';

import EnrollmentMail from '../app/jobs/EnrollmentMail';
import redisConfig from '../config/redis';
import HelpOrderMail from '../app/jobs/HelpOrderMail';

const jobs = [EnrollmentMail, HelpOrderMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`${new Date()} - Queue ${job.queue.name}: FAILURE`, err);
  }
}

export default new Queue();
