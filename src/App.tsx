import { useState } from "react";
import Controls from "./components/Controls";
import CatImage from "./components/CatImage";
import Wrapper from "./components/Wrapper";
import { useCatFetcher } from "./hooks/useCatFetcher";

const App: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const { catUrl, getNewCat } = useCatFetcher(enabled, autoRefresh);

  return (
    <Wrapper>
      <Controls
        enabled={enabled}
        autoRefresh={autoRefresh}
        onEnabledChange={setEnabled}
        onAutoRefreshChange={setAutoRefresh}
        onClick={getNewCat}
      />
      {catUrl && <CatImage url={catUrl} />}
    </Wrapper>
  );
};

export default App;