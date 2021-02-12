export const selectErrorText = (text: string): string => {
  let errorText = '';

  switch (text) {
    case 'TypeError: Network request failed':
      errorText = 'Нет интернета. Проверьте подключение';
      break;
    case 'Invalid command.':
      errorText = 'Неверный запрос к серверу';
      break;
    default:
      errorText = 'Ошибка обновления данных. Повторите позднее или обратитесь в техноддержку';
      break;
  }
  return errorText;
};