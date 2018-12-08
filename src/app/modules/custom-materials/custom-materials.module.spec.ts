import { CustomMaterialsModule } from './custom-materials.module';

describe('MyOwnMaterialsModule', () => {
  let customMaterialsModule: CustomMaterialsModule;

  beforeEach(() => {
    customMaterialsModule = new CustomMaterialsModule();
  });

  it('should create an instance', () => {
    expect(CustomMaterialsModule).toBeTruthy();
  });
});
