const basePx = 16;
export const convertPixelsToRem = (px: number) => {
  return px / basePx + 'rem';
};

export const generateRandomId = (prefix?: string, suffix?: string) => {
  return (prefix ?? '') + '-TODO-' + (suffix ?? '');
};

// Taken from: https://www.tutorialstonight.com/javascript-string-format.php
export const formatString = (base: string, ...args: any[]) => {
  // use replace to iterate over the string
  // select the match and check if related argument is present
  // if yes, replace the match with the argument
  return base.replace(/{([0-9]+)}/g, function (match, index) {
    // check if the argument is present
    return typeof args[index] == 'undefined' ? match : args[index];
  });
};

export const throttle = (callback: any, limit: number) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};
