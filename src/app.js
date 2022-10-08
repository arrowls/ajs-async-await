import read from './reader';
import json from './parser';

(async () => {
  try {
    const fileData = await read();
    return json(fileData);
  } catch (err) {
    console.log(err);
    return null;
  }
})();
