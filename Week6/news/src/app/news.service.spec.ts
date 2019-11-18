import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { NewsService } from "./news.service";
import {
  HttpClient,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { of } from "rxjs";

describe("NewsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService, HttpClient]
    })
  );

  it("should be created", () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it("should be created without beforeeach()", () => {
    const { _newsService, httpServiceSpy } = setup();
    expect(_newsService).toBeTruthy();
  });

  it("test for getChannles() method", () => {
    const responseData = {
      id: "abc-news-au",
      name: "ABC News (AU)",
      description:
        "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: "http://www.abc.net.au/news",
      category: "general",
      language: "en",
      country: "au",
      urlsToLogos: { small: "", medium: "", large: "" },
      sortBysAvailable: ["top"]
    };
    const { _newsService, httpServiceSpy } = setup();
    httpServiceSpy.get.and.returnValue(of(responseData));
    _newsService
      .getChannels()
      .subscribe(channels =>
        expect(channels).toEqual(responseData, "expected result")
      );
    expect(httpServiceSpy.get.calls.count()).toBe(1, "one call");
  });

  // it("should return an error when the server returns a 404", () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: "test 404 error",
  //     status: 404,
  //     statusText: "Not Found"
  //   });
  //   // const { _newsService, httpServiceSpy } = setup();
  //   const service: NewsService = TestBed.get(NewsService);
  //   const http = TestBed.get(HttpTestingController);
  //   http.get.and.returnValue(asyncError(errorResponse));

  //   service
  //     .getChannels()
  //     .subscribe(
  //       heroes => fail("expected an error, not heroes"),
  //       error => expect(error.message).toContain("test 404 error")
  //     );
  // });
});

function setup() {
  const httpServiceSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  const _newsService = new NewsService(httpServiceSpy);
  return { _newsService, httpServiceSpy };
}
