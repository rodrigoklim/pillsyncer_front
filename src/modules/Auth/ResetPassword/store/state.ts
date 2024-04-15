interface State {
  loading: boolean;
  errorResponse: string;
}
export default (): State => ({
  loading: false,
  errorResponse: '',
});
