import { Box, Stack, Button } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';

export const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {

    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/newsandupdates">News & Updates</MenuItem>
                <MenuItem to="/contact">Contact </MenuItem>
                <MenuItem to="/academia">Academia </MenuItem>
                <MenuItem to="/">Login</MenuItem>
                <MenuItem to="/" isLast>
                    <Button
                        size="sm"
                        rounded="md"
                        color={["primary.500", "primary.500", "white", "white"]}
                        bg={["white", "white", "primary.500", "primary.500"]}
                        _hover={{
                            bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                        }}
                    >
                        Create Account
                    </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};