import { MyTemplateDirective } from './my-template.directive';

describe('MyTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new MyTemplateDirective(null);
    expect(directive).toBeTruthy();
  });
});
