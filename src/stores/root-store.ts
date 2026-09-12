import { makeAutoObservable } from "mobx";

export class RootStore {
  selectedWorkflow = "知识库问答";
  requestCount = 0;
  streamingEnabled = true;

  constructor() {
    makeAutoObservable(this);
  }

  selectWorkflow(workflow: string) {
    this.selectedWorkflow = workflow;
  }

  incrementRequestCount() {
    this.requestCount += 1;
  }

  toggleStreaming() {
    this.streamingEnabled = !this.streamingEnabled;
  }
}

