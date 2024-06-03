import { useEffect, useState } from 'react'
// import './App.css'
import { Spinner } from '@fluentui/react-components';
import { ProductsHubList } from "./components/ProductHubList";

enum DataLoadState {
  NotLoaded,
  Loading,
  Loaded,
  Error
}

function App() {
  const [dataLoadState, setDataLoadState] = useState<DataLoadState>(DataLoadState.NotLoaded);
  const [data, setData] = useState<ProductsHub>();
  const [selections, setSelections] = useState<number[]>([]);

  const addSelection = (productId: number) => {
    setSelections((current) => [...current, productId])
  }

  const removeSelection = (productId: number) => {
    setSelections((current) => current.filter((id) => id !== productId))
  }

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setDataLoadState(DataLoadState.Loading);
      try {
        const [productResponse, selectionsResponse] = await Promise.all([
          fetch("api/products", {
            signal: abortController.signal,
          }),
          fetch("api/user/selections", {
            signal: abortController.signal,
          })
        ]);
        const productData = await productResponse.json();
        setData(productData);

        const selectionsData = await selectionsResponse.json();
        setSelections(selectionsData);

        setDataLoadState(DataLoadState.Loaded);
      } catch {
        setDataLoadState(DataLoadState.Error);
      }
    }
    fetchData();

    return () => {
      abortController.abort();
    }
  }, [])

  return (
    <>
      <h1>Test Products Hub</h1>
      {(dataLoadState == DataLoadState.NotLoaded || dataLoadState == DataLoadState.Loading) && <Spinner appearance="primary" />}
      {dataLoadState == DataLoadState.Loaded && (
        <ProductsHubList data={data!} />
      )}
    </>
  )
}

export default App
