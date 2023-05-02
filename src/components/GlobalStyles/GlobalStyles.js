import PropTypes from 'prop-types'
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

// propTypes
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles;
