describe("pow", function () {
  before(() => console.log("테스트를 시작합니다. = 테스트가 시작되기 전"));
  after(() => console.log("테스트를 종료합니다. = 테스트가 종료된 후"));

  beforeEach(() =>
    console.log("단일 테스트를 시작합니다. = 각 테스트가 시작되기 전")
  );
  afterEach(() =>
    console.log("단일 테스트를 종료합니다. = 각 테스트가 종료된 후")
  );

  it("주어진 숫자의 n 제곱", function () {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

  it("2를 세 번 곱하면 8입니다.", function () {
    assert.equal(pow(2, 3), 8);
  });

  it.only("3를 네 번 곱하면 81입니다.", function () {
    assert.equal(pow(3, 4), 81);
  });

  describe("x를 세 번 곱합니다.", () => {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("n이 음수일 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, -1));
  });

  it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
