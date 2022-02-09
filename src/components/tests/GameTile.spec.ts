import { mount } from "@vue/test-utils";
import GameTile from "../GameTile.vue";

describe("GameTile", () => {
  it("should display num", () => {
    const num = Math.floor(Math.random() * 100);

    const wrapper = mount(GameTile, { props: { num, coordinates: [0, 0] } });

    expect(wrapper.find("td").text()).toEqual(num.toString());
  });
});
