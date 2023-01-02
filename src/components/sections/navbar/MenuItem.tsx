import { Link, To } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

type MenuItemProps = {
    children: React.ReactNode,
    isLast?: boolean,
    to: To
}

export const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemProps) => {
    return (
        <Link to={to}>
            <Text display="block" fontSize={'lg'} {...rest}>
                {children}
            </Text>
        </Link>
    );
};