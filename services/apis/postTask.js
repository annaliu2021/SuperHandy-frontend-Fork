const { req } = useHttp();

// 檢查地址
export const getLocation = (data) =>
  req("GET", "/post-task/check-location", data, { auth: true });

// 儲存為草稿
export const postDraft = (data) =>
  req("POST", "/post-task/draft", data, { auth: true });

// 直接刊登任務
export const postPublish = (data) =>
  req("POST", "/post-task/publish", data, { auth: true });

// 從草稿刊登任務
export const postPublishFromDraft = (taskId, data) =>
  req("POST", `/post-task/draft/${taskId}`, data, { auth: true });

// 取得草稿byTaskId
export const getDraftById = (taskId) =>
  req("GET", `/post-task/draft/${taskId}`, {}, { auth: true });

// 刪除草稿byTaskId
export const deleteDraftById = (taskId) =>
  req("DELETE", `/post-task/draft/${taskId}`, {}, { auth: true });

// 更新草稿byTaskId
export const putDraftById = (taskId, data) =>
  req("PUT", `/post-task/draft/${taskId}`, data, { auth: true });

//下架任務
export const postPostTaskUnpublish = (taskId) =>
  req("POST", `/post-task/unpublish/${taskId}`, {}, { auth: true });

//上架任務
export const postPostTaskRepublish = (taskId) =>
  req("POST", `/post-task/republish/${taskId}`, {}, { auth: true });

//編輯下架任務
export const postPostTaskEdit = (taskId, data) =>
  req("POST", `/post-task/edit/${taskId}`, data, { auth: true });

// 取得已發布的任務
export const getTasksById = (taskId, data) =>
  req("GET", `/tasks/management/${taskId}`, data, { auth: true });
