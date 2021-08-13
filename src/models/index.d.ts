import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type JobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Job {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly location?: string;
  readonly deadline?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Job, JobMetaData>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job, JobMetaData>) => MutableModel<Job, JobMetaData> | void): Job;
}