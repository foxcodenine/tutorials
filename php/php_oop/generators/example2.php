<?php
header('Content-Type: application/json');
$input = <<<'EOF'
1;PHP;Likes dollar signs
2;Python;Likes whitespace
3;Ruby;Likes blocks
EOF;

function input_parser($input) {
    foreach (explode("\n", $input) as $line) {

        $fields = explode(';', $line);

        list($id, $language, $description) = $fields;

        yield $id => [$language, $description];
    }
}

foreach (input_parser($input) as $k => $v) {
    echo $k;
    echo $v[0];
    echo $v[1];
}
?>