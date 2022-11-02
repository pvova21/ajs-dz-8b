import ErrorRepository from '../index';

test('проверка наличии ключа', () => {
  const errorNew = new ErrorRepository();
  expect(errorNew.translate('404')).toBe('Not Found');
});

test('проверка отсутствии ключа', () => {
  const errorNew = new ErrorRepository();
  expect(errorNew.translate('403')).toBe('Unknown error');
});
