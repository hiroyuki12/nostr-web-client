
export const removeInlineImageURL = (content: string): string => {
  let tmp = content;
  {
    const count = tmp.split('\\/').length;
    for (let i = 0; i < count; i++) {
      tmp = tmp.replace('\\/', '/');
    }
  }
  for (let i = 0; i < 5; i++) {
    tmp = tmp.replace('\n', ' ');
    tmp = tmp.replace('　', ' ');
    tmp = tmp.replace('`', ' ');
    tmp = tmp.replace('`', ' ');
    tmp = tmp.replace('https://', ' https://');  // Add space before http
    tmp = tmp.replace('http://', ' http://');
    tmp = tmp.replace("`", "");  // googleusercontent
  }
  {
    const count = tmp.split('\n').length;
    for (let i = 0; i < count; i++) {
      tmp = tmp.replace('\n', ' ');
    }
  }
  const tmpContent = tmp.split(' ');

  // Remove URLs with specific extensions
  for (let i = 0; i < tmpContent.length; i++) {
    if (tmpContent[i].includes('http') &&
      (tmpContent[i].includes('.jpg') ||
        tmpContent[i].includes('.jpeg') ||
        tmpContent[i].includes('.png') ||
        tmpContent[i].includes('.gif') ||
        tmpContent[i].includes('.svg') ||
        tmpContent[i].includes('.ico') ||
        tmpContent[i].includes('.bmp') ||
        tmpContent[i].includes('.webp') ||
        tmpContent[i].includes('.mp3') ||
        tmpContent[i].includes('.mp4') ||
        tmpContent[i].includes('.mov')
      )) {
      content = content.replace(tmpContent[i], '')
    }
  }
  return content;
};


