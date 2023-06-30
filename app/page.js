import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledInput from "./components/StyledInput";

const StyledDiv = ({ title, children }) => {
  return (
    <div className="flex items-start flex-wrap gap-x-4 py-2 px-4">
      {title && <h3 className="w-full">{title}</h3>}
      {children}
    </div>
  );
};

const StyledTitle = ({ title }) => {
  return <h2 className="mt-4 mb-2 shadow-md">{title}</h2>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <Header />
      <div className="px-4 w-11/12">
        <StyledTitle title={"<StyledInput />"} />
        <StyledDiv>
          <StyledInput />
        </StyledDiv>

        <StyledTitle title={"<StyledInput error />"} />
        <StyledDiv>
          <StyledInput error />
        </StyledDiv>

        <StyledTitle title={"<StyledInput disabled />"} />
        <StyledDiv>
          <StyledInput disabled />
        </StyledDiv>

        <StyledTitle
          title={"<StyledInput helperText='Some interesting text' />"}
        />
        <StyledDiv>
          <StyledInput helperText="Some interesting text" />
          <StyledInput helperText="Some interesting text" error />
        </StyledDiv>

        <StyledTitle
          title={"Icons"}
        />
        <StyledDiv>
          <StyledInput label="startIcon='phone'" startIcon="phone" />
          <StyledInput label="endIcon='lock'" endIcon="lock" />
          <StyledInput label="startIcon='github' endIcon='twitter'" startIcon="github" endIcon="twitter" />
        </StyledDiv>
        
        <StyledTitle
          title={"Value"}
        />
        <StyledDiv>
          <StyledInput label="value='text'" value="text" />
        </StyledDiv>
        
        <StyledTitle
          title={"Sizes"}
        />
        <StyledDiv>
          <StyledInput label="size='sm'" size="sm" />
          <StyledInput label="size='md' (default)" size="md"/>
        </StyledDiv>
        
        <StyledTitle
          title={"Full Width"}
        />
        <StyledDiv>
          <StyledInput label="fullWidth" fullWidth />
        </StyledDiv>
        
        <StyledTitle
          title={"Multiline"}
        />
        <StyledDiv>
          <StyledInput label="multiline row={4}" multiline row={4} endIcon="mail" />
        </StyledDiv>
      </div>
      <Footer />
    </main>
  );
}
