class ActionSheet {
  constructor() {
    this.options = {};
  }

  setOptions(options) {
    this.options = options;
  }

  show() {
    return new Promise(resolve => {
      window.plugins.actionsheet.show(this.options, resolve);
    });
  }
}

export default new ActionSheet();