"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ds_react_1 = require("@navikt/ds-react");
const react_intl_1 = require("react-intl");
const intlUtils_1 = __importDefault(require("../../../utils/intlUtils"));
const BekreftDialog_1 = __importDefault(require("../bekreft-dialog/BekreftDialog"));
const FortsettSøknadSenereDialog = (props) => {
    const intl = (0, react_intl_1.useIntl)();
    const { synlig, onFortsettSøknad, onFortsettSøknadSenere } = props;
    return ((0, jsx_runtime_1.jsxs)(BekreftDialog_1.default, { open: synlig, bekreftLabel: (0, intlUtils_1.default)(intl, 'fortsettSøknadSenereDialog.avbrytSøknadLabel'), avbrytLabel: (0, intlUtils_1.default)(intl, 'fortsettSøknadSenereDialog.fortsettSøknadLabel'), closeButton: false, "aria-label": (0, intlUtils_1.default)(intl, 'fortsettSøknadSenereDialog.tittel'), onBekreft: onFortsettSøknadSenere, onClose: onFortsettSøknad, children: [(0, jsx_runtime_1.jsx)(ds_react_1.Heading, { size: "small", children: (0, jsx_runtime_1.jsx)(react_intl_1.FormattedMessage, { id: "fortsettS\u00F8knadSenereDialog.tittel" }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(react_intl_1.FormattedMessage, { id: "fortsettS\u00F8knadSenereDialog.intro" }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(react_intl_1.FormattedMessage, { id: "fortsettS\u00F8knadSenereDialog.sp\u00F8rsm\u00E5l" }) })] }));
};
exports.default = FortsettSøknadSenereDialog;
//# sourceMappingURL=FortsettS%C3%B8knadSenereDialog.js.map