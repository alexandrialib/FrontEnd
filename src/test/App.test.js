import mockAxios from "axios";
import {getAllCategories} from '../js/DataProvider'

it("fetches data from unsplash", async () => {


  // work
  const categories = await getAllCategories("categories");
  console.log(categories)
  // expect
  expect(categories).toEqual([{"id":"5c992031eb632a00047e6a96","name":"Sort","articles":[{"title":"Quick","content":"felis porttitor fugit explicari latine feugait mutat ei graecis graece"},{"title":"Selection","content":"dignissim natoque torquent movet fermentum dicat homero suscipiantur deterruisset conubia"},
  {"title":"Bubble","content":"urbanitas antiopam maecenas deseruisse mentitum fabulas impetus ultricies non leo"},
  {"title":"Merge","content":"porta noster detraxit sem utinam porttitor laudem epicuri consul iriure"}]},
  {"id":"5c992031eb632a00047e6a97","name":"Graph theory","articles":[{"title":"TopoSort","content":"decore porttitor leo decore ex altera iaculis integer turpis fugit"},{"title":"MST","content":"tation magnis adipisci molestiae ponderum consectetur splendide sumo blandit animal"},{"title":"Dijkstra","content":"ea habitasse vim intellegat tacimates scripserit ubique cras equidem eum"}]},{"id":"5c992031eb632a00047e6a98","name":"Data structures","articles":[]}]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);

});