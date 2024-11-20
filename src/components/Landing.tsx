import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types/redux/root_state';

interface LandingProps {}

const Landing: FC<LandingProps> = (props: LandingProps) => {
    return <></>;
};

const mapStateToProps = (state: RootState) => {
    return {};
};

export default connect(mapStateToProps)(Landing);
