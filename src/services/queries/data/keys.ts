import { getQueryKeys } from "../../helper";

const namespace = "data";

const keys = {
  ...getQueryKeys(namespace),
  login: `${namespace}/login`,
  logout: `${namespace}/logout`,
  verification: `${namespace}/verification`,
};

export default keys;
