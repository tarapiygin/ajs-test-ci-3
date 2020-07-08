import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');

test('must get user 21 level', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '21',
  });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 21');
});

test('should return an error string', () => {
  fetchData.mockReturnValue({
    status: '404',
    level: '21',
  });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
