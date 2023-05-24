SELECT liquor.liquor_name AS liquor, liquor.liquor_price AS price, liquor.liquor_volume AS volume, liquor.liquor_type AS type
FROM liquor INNER JOIN name ON liquor.name_id = name.id
LEFT JOIN liquor ON brand.id = liquor.brand_id
ON brand.id = liquor.brand_id
ORDER BY liquor.id DESC
LIMIT 10



