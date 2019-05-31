#!/bin/bash


# for ICON in "Icon" "Pepsi"; do
#     for SIZE in "16" "32" "64" "128" "256"; do
#         echo "Building textures/${ICON}_${SIZE}.png"
#         rsvg-convert -h "${SIZE}" "textures/${ICON}.svg" > "textures/${ICON}_${SIZE}.png"
#     done
# done

declare -A icons=(
    ["apple-touch-icon"]="57 60 72 76 114 120 144 152"
    ["favicon"]="16 32 96 128 196"
)

file() {
    printf "$1-%sx%s.png " $2
    echo ""
}


echo "${icons[favicon]}"
for name in "${!icons[@]}"; do
    for size in ${icons[$name]}; do
    file="${name}-${size}x${size}.png"
    echo "Building ${file}"
    # rsvg-convert -h "${size}" -f "png" "Icon.svg" > "${file}"
    done
done

# printf "foo %s bar " ${icons[favicon]}
file favicon "${icons[favicon]}"
# magick convert .ico