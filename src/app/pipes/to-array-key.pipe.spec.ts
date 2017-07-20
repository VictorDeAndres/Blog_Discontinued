import { ToArrayPipe } from './to-array-key.pipe';

describe('ToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
