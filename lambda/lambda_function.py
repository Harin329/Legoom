import json

from recipe_scrapers import scrape_me

def lambda_handler(event, context):
    url = event["queryStringParameters"]["url"]
    scraper = scrape_me(url)
    return {
        'statusCode': 200,
        'body': json.dumps(scraper.nutrients() or {})
    }

