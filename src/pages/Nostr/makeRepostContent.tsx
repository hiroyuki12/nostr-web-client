

export const processRepostContent = (content: string): string => {
  let splitContent = content;

  if (!splitContent.includes('",\"content') && !splitContent.includes('L,')) {
    splitContent = splitContent.split(','); // , でsplit. Repost contentに,があるとNG
  } else {
    splitContent = splitContent.split('",'); // ", でsplit
  }

  for (let i = 0; i < splitContent.length; i++) {
    // Repostのcontentデータをcontentの本文のみに調整
    if (splitContent[i].includes('"content"')) {
      let splitContent2 = splitContent[i];
      splitContent2 = splitContent2.replace('{"content":"', '');
      splitContent2 = splitContent2.replace('"content":"', '');

      {
        const count = splitContent2.split('\\n').length;
        for (let j = 0; j < count; j++) {
          splitContent2 = splitContent2.replace("\\n", "\n"); // \\n -> \n
        }
      }
      {
        const count = splitContent2.split('\\/').length;
        for (let j = 0; j < count; j++) {
          splitContent2 = splitContent2.replace("\\/", "/"); // \/ -> /
        }
      }
      {
        const count = splitContent2.split('\\"').length;
        for (let j = 0; j < count; j++) {
          splitContent2 = splitContent2.replace('\\"', '"'); // \" -> "
        }
      }

      if (splitContent2.substr(-1) == '}') { // 末尾が}の時は最後の文字を削除
        splitContent2 = splitContent2.slice(0, -1);
      }
      if (splitContent2.substr(-1) == '"') { // 末尾が"の時は最後の文字を削除
        splitContent2 = splitContent2.slice(0, -1);
      }

      return splitContent2;
    }
  }

  return content;
};
