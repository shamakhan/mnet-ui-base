import { describe } from 'react-desc';
import { getAvailableAtBadge } from '../../utils';
export var doc = function doc(Footer) {
  var DocumentedFooter = describe(Footer).availableAt(getAvailableAtBadge('Footer')).description('Footer for a document or section').usage("import { Footer } from 'mnet-ui-base';\n<Footer />");
  return DocumentedFooter;
};