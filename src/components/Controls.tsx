import styled from "styled-components";

type Props = {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (val: boolean) => void;
  onAutoRefreshChange: (val: boolean) => void;
  onClick: () => void;
};

const Controls: React.FC<Props> = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onClick,
}) => {
  return (
    <Container>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onEnabledChange(e.target.checked)}
        />
        Enabled
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={(e) => onAutoRefreshChange(e.target.checked)}
          disabled={!enabled}
        />
        Auto-refresh every 5 second
      </CheckboxLabel>
      <Button onClick={onClick} disabled={!enabled}>
        Get cat
      </Button>
    </Container>
  );
};


export default Controls;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin: 8px 0;
`;

const Button = styled.button`
  width: 100%;
  margin: 12px 0;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
