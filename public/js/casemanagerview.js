const editUacBtnEl = document.querySelector("#edit-uac");
const editUACModal = document.querySelector("#edit-uac-modal");
const editSponsorEl = document.querySelector("#edit-sponsor");
const editUACxCloseEl = document.querySelector("#edit-uac-close-x");
const editUACcancelBtnEL = document.querySelector("#cancel-edit-uac-modal");
const editUACbgEl = document.querySelector("#edit-uac-BG");

const editSponsorModal = document.querySelector("#edit-sponsor-modal");
const editSponsorBgEl = document.querySelector("#edit-sponsor-BG");
const editSponsorX = document.querySelector("#edit-sponsor-close-x");
const editSponsorCancel = document.querySelector("#cancel-edit-sponsor-modal");

const editTaskBtnEl = document.querySelector("#edit-tasks");
const editTaskModal = document.querySelector("#edit-tasks-modal");
const editTaskxCloseEl = document.querySelector("#edit-tasks-close-x");
const editTaskcancelBtnEL = document.querySelector("#cancel-edit-task-modal");
const editTaskbgEl = document.querySelector("#edit-tasks-BG");

const releaseRequestModal = document.querySelector("#release-request-modal");
const releaseRequestBtnEl = document.querySelector("#release-request-btn");
const releaseRequestModalBG = document.querySelector("#release-request-BG");
const releaseRequestModalX = document.querySelector("#release-request-x");

const closeRRModal = function () {
  releaseRequestModal.classList.remove("is-active");
};

const activateRRModal = function () {
  releaseRequestModal.classList.add("is-active");
};
releaseRequestModalBG.addEventListener("click", closeRRModal);

releaseRequestModalX.addEventListener("click", closeRRModal);

releaseRequestBtnEl.addEventListener("click", activateRRModal);

const closeUACModal = function () {
  editUACModal.classList.remove("is-active");
};

const activateUACModal = function () {
  editUACModal.classList.add("is-active");
};

const activateSponsorModal = function () {
  editSponsorModal.classList.add("is-active");
};

const closeSponsorModal = function () {
  editSponsorModal.classList.remove("is-active");
};

editUacBtnEl.addEventListener("click", activateUACModal);

editUACxCloseEl.addEventListener("click", closeUACModal);

editUACcancelBtnEL.addEventListener("click", closeUACModal);

editUACbgEl.addEventListener("click", closeUACModal);

editSponsorEl.addEventListener("click", activateSponsorModal);

editSponsorBgEl.addEventListener("click", closeSponsorModal);

editSponsorX.addEventListener("click", closeSponsorModal);

editSponsorCancel.addEventListener("click", closeSponsorModal);

const closeTaskModal = function () {
  editTaskModal.classList.remove("is-active");
};

const activateTaskModal = function () {
  editTaskModal.classList.add("is-active");
};

editTaskBtnEl.addEventListener("click", activateTaskModal);

editTaskxCloseEl.addEventListener("click", closeTaskModal);

editTaskcancelBtnEL.addEventListener("click", closeTaskModal);

editTaskbgEl.addEventListener("click", closeTaskModal);

const editRRBtnEl = document.querySelector("#edit-RR");
const editRRModal = document.querySelector("#edit-RR-modal");
const editRRxCloseEl = document.querySelector("#edit-RR-close-x");
const editRRcancelBtnEL = document.querySelector("#cancel-edit-RR-modal");
const editRRbgEl = document.querySelector("#edit-RR-BG");

const closeEditRRModal = function () {
  editRRModal.classList.remove("is-active");
};

const activateEditRRModal = function () {
  editRRModal.classList.add("is-active");
};

editRRBtnEl.addEventListener("click", activateEditRRModal);

editRRxCloseEl.addEventListener("click", closeEditRRModal);

editRRcancelBtnEL.addEventListener("click", closeEditRRModal);

editRRbgEl.addEventListener("click", closeEditRRModal);
