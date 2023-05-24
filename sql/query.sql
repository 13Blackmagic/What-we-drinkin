SELECT liquor.name, liquor.price, liquor.volume, liquor.type, liquor.description = 1
FROM liquor INNER JOIN name ON liquor.name_id = name.id
LEFT JOIN liquor ON brand.id = liquor.brand_id
ON brand.id = liquor.brand_id
ORDER BY liquor.id DESC
LIMIT 10



