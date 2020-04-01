const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
};

const test = async (title, callback) => {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`⛔️ ${title}`);
    console.error(error);
  }
};

global.expect = expect;
global.test = test;
