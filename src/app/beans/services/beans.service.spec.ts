import { of } from 'rxjs';
import { BeansService } from './beans.service';

describe('BeanService', () => {
  let service: BeansService;
  let httpClientSpy: any;
  const ENDPOINT_URL = 'https://random-data-api.com/api/coffee/random_coffee?size=50&response_type=JSON';
  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn()
    }
    service = new BeansService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getBeans', () => {
    const res = {
      "id": 9778,
      "uid": "c8f21151-ded1-4dd3-aeb1-63cdd9f44ef1",
      "blend_name": "Evening Been",
      "origin": "Santander, Colombia",
      "variety": "Pacas",
      "notes": "vibrant, tea-like, red apple, smokey, kiwi",
      "intensifier": "dense"
    };
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getBeans();

    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(ENDPOINT_URL);
  });
});
