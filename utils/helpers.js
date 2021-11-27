module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  format_nice_date: (date) => {
    if (!date) {
      return "";
    }
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  color_coding: () => {
    const criterion = document.querySelectorAll("table-info");
    if (criterion.value === "") {
      criterion.classList.add("has-background-danger");
    }
    criterion.classList.add("has-background-primary");
  },
};
