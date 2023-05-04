import xlsx from 'xlsx-color';
import Header from './header';
import Data from './data';
export default {
    create: function (props) {
        var worksheet = xlsx.utils.aoa_to_sheet([
            props.header.map(function (a) { return a.label; }),
            // ...Data.create(props)
        ]);
        // xlsx.utils.sheet_add_aoa(worksheet,[])
        Header.create(worksheet, props);
        Data.create(worksheet, props);
        var range = xlsx.utils.decode_range(worksheet['!ref']);
        var tableRange = {
            s: { r: range.s.r + 1, c: range.s.c },
            e: { r: range.e.r, c: range.e.c }
        };
        worksheet['!autofilter'] = { ref: worksheet["!ref"] };
        worksheet['!table'] = {
            headerRow: 1,
            ref: xlsx.utils.encode_range(tableRange),
            style: {
                theme: 'TableStyleMedium9',
                showRowStripes: true
            }
        };
        return worksheet;
    }
};
