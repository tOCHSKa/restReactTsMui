import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

const SelectComponant: React.FC = () => {
    const [articles, setArticles] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setArticles(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '2rem' }}>
                <Button color="inherit">Tous</Button>
                <Button color="inherit">Article 1</Button>
                <Button color="inherit">Article 2</Button>
                <Button color="inherit">Article 3</Button>
                <Button color="inherit">Article 4</Button>
            </Box>

            <FormControl sx={{ display: { xs: 'flex', sm: 'none' }, m: 1 }}>
                <InputLabel id="demo-multiple-name-label">Articles</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={articles}
                    onChange={handleChange}
                    label="Articles"
                >
                    <MenuItem value="">
                        <em>Tous</em>
                    </MenuItem>
                    <MenuItem value="1">Article 1</MenuItem>
                    <MenuItem value="2">Article 2</MenuItem>
                    <MenuItem value="3">Article 3</MenuItem>
                    <MenuItem value="4">Article 4</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default SelectComponant;
