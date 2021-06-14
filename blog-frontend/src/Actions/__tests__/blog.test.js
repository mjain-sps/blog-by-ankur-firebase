import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import { getBlogsAction } from "../blogs.actions";
import { getBlogTypes } from "../../Action-Types/blog.types";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("get all blogs action", () => {
  test("get blogs success implementations", () => {
    //step 1 we have to mockthe fetch
    fetchMock.getOnce("http://localhost:4000/firestore/posts", {
      body: { blogSnapshot: [{ id: "xyz", author: "madhur" }] },
      headers: { "content-type": "application/json" },
    });

    //step 2 create constants of expected actions
    const expectedAction = [
      { type: getBlogTypes.GET_BLOG_SNAPSHOTS_LOADING },
      {
        type: getBlogTypes.GET_BLOG_SNAPSHOTS_SUCCESS,
        payload: { blogSnapshot: [{ id: "xyz", author: "madhur" }] },
      },
    ];
    const store = mockStore({ blogSnapshot: [] });
    return store.dispatch(getBlogsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
}); //describe ends here
